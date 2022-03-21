import { AddAccountRepository } from "../../../../../data/protocols/add-account-repository";
import { AccountModel } from "../../../../../domain/models/account";
import { AddAccountModel } from "../../../../../domain/usecases/add-account";
import { MongoHelper } from "../helpers/mongo-helper";

export class AccountMongoRepository implements AddAccountRepository{
    async add (accountData: AddAccountModel): Promise<AccountModel> {

        const accountCollection = MongoHelper.getCollection('accounts')
        const result = await accountCollection.insertOne(accountData)
        const {insertedId: id} = result
        const accountById = await accountCollection.findOne({_id: id})
        const {_id, ...accountWithoutId} = accountById
        return MongoHelper.map(_id.toHexString(), accountWithoutId)
    }

}