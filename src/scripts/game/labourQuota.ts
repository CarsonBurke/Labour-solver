import { env } from "../env/env"

export class LabourQuota {

    ID: string
    game: Game 
    constructor(game: Game, opts: any) {

        this.game = game
        this.ID = env.newID()
        Object.assign(this, opts)
    }

}