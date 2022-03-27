import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

export interface IChampion {
    img: string;
    name: string;
    bg: string;
    nickName: string;
    role: string;
    difficulty?: string;
    description: string;
    video: string;
    bgLarge: string;
}

export class Champion implements IChampion {
    img: string;
    name: string;
    bg: string;
    nickName: string;
    role: string;
    difficulty: string;
    description: string;
    video: string;
    bgLarge: string;
    sanitizer?: DomSanitizer;

    constructor(champ: IChampion, sanitizer?: DomSanitizer) {
        this.img = champ.img;
        this.name = champ.name;
        this.bg = champ.bg;
        this.nickName = champ.nickName;
        this.role = champ.role;
        this.description = champ.description;
        this.video = champ.video;
        this.bgLarge = champ.bgLarge;
        this.sanitizer = sanitizer;

        this.initDifficulty();
    }

    private initDifficulty(): void {
        if (!this.difficulty) {
            this.difficulty = 'LOW';
        }
    }

    public getVideo(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${this.video}`);
    }
}

export class Assasin extends Champion {
    constructor(champ: IChampion, override sanitizer?: DomSanitizer) {
        super(champ, sanitizer);
        this.difficulty = 'HARD';
    }
}

export class Marksman extends Champion {
    constructor(champ: IChampion, override sanitizer?: DomSanitizer) {
        super(champ, sanitizer);
        this.difficulty = 'HARD';
    }
}

export class Fighter extends Champion {
    constructor(champ: IChampion, override sanitizer?: DomSanitizer) {
        super(champ, sanitizer);
        this.difficulty = 'LOW';
    }
}

export class Mage extends Champion {
    constructor(champ: IChampion, override sanitizer?: DomSanitizer) {
        super(champ, sanitizer);
        this.difficulty = 'MODERATE';
    }
}
