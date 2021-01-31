import { Field, ID, ObjectType } from 'type-graphql';

import { Pet } from './Pet';

@ObjectType({
    description: 'User object.',
})
export class User {

    @Field(type => ID)
    public id: string;

    @Field({
        description: 'The email of the user.',
    })
    public email: string;

    @Field(type => [Pet], {
        description: 'A list of pets which belong to the user.',
    })
    public pets: Pet[];

    @Field({
        description: 'The details of the user.',
    })
    public details: { first_name: string; last_name: string; };

}
