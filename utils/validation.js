const Joi = require('joi');
const userController = require('../controllers/userController')

exports.validateExpense =async (data) => {
  const schema = Joi.object({
    amount: Joi.number().positive(),
    description: Joi.string().optional(),
    splitMethod: Joi.string().valid('equal', 'exact', 'percentage').required(),
    participants: Joi.array().items(
      Joi.object({
        email: Joi.string().required(),
        value: Joi.number().positive().required(),
        amount: Joi.number().positive()
      })
    ).min(1).required()
  });

  for (const participant of data.participants) {

    const user = await userController.userExist(participant.email);
    if (!user[0]) 
      return { error: { details: [{ message: 'One or more user doesnt exist in database' }] } };
  }

  if (data.splitMethod === 'percentage') {
    const totalPercentage = data.participants.reduce((acc, participant) => acc + participant.value, 0);
    if (totalPercentage !== 100) {
      return { error: { details: [{ message: 'Percentages must add up to 100' }] } };
    }
    data.participants.map((participant,i)=>{participant.amount=participant.value * data.amount/100})
  }
  if (data.splitMethod === 'equal') {
    data.participants.map((participant,i)=>{participant.amount=data.amount/data.participants.length})
  }
  if (data.splitMethod === 'exact') {
    data.participants.map((participant,i)=>{participant.amount=participant.value})
  }

  return schema.validate(data);
};
