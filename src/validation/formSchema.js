import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim().required('Name is required').min(2, 'Name must be 2 characters long'),
    size: yup.string().trim().required('size is needed'),
    sauce: yup.string().oneOf(['original red', 'garlic ranch', 'bbq sauce', 'spinach alfredo']),
    instructions: yup.string().trim(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian_bacon: yup.boolean(),
    spicy_italian_sausage: yup.boolean(),
    grilled_chicken: yup.boolean(),
    onions: yup.boolean(),
    green_pepper: yup.boolean(),
    diced_tomatos: yup.boolean(),
    black_olives: yup.boolean(),
    roasted_garlic: yup.boolean(),
    artichoke_hearts: yup.boolean(),
    three_cheese: yup.boolean(),
    pineapple: yup.boolean(),
    extra_cheese: yup.boolean(),
    substitude: yup.boolean(),
})

export default formSchema