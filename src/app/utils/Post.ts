

export class Post {

    constructor(
         private title: string,
         private contenttext: string,
         private loveIts: number,
         private created_at: Date = new Date()
    ) { }

  }
