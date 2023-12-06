import { env } from "../env/env"
import { LabourQuota } from "./labourQuota"

export class Worker {
    
    ID: string
    game: Game
    constructor(game: Game, opts: any) {

        this.game = game
        this.ID = env.newID()
        Object.assign(this, opts)
    }
    runQuota(quota: LabourQuota) {

        
    }
}