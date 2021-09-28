/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=5127s
    Github Link: https://github.com/Sajeel-Bongale/task-manager

    Currently we can pass empty strings to the object(document) in the database, and they will
    be accepted. There is no data validation as such prior to insertion.
    You can also send an empty object and it will work.

    To prevent this, we will add validations to this.

    We an add validations by creating an object for each schema property and within it declare
    all the kind of validations we need:
    eg:
    name: {
        type: String,
        required: [true, 'must have name filled in'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    }
 */