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

    constructor(champ: IChampion, sanitizer: DomSanitizer) {
        this.img = champ.img;
        this.name = champ.name;
        this.bg = champ.bg;
        this.nickName = champ.nickName;
        this.role = champ.role;
        this.description = champ.description;
        this.video = champ.video;
        this.bgLarge = champ.bgLarge;
        this.sanitizer = sanitizer;

        this.assignDifficulty();
    }

    private assignDifficulty(): void {
        switch (this.role) {
            case 'ASSASSIN':
            case 'MARKSMAN':
                this.difficulty = 'HARD';
                break;
            case 'FIGHTER':
                this.difficulty = 'LOW';
                break;
            case 'MAGE':
                this.difficulty = 'MODERATE';
                break;
            default:
                this.difficulty = 'LOW';
                break;
        }
    }

    public getVideo(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${this.video}`);
    }
}

export class Assasin extends Champion {
    constructor(champ: IChampion, override sanitizer?: DomSanitizer) {
        super(champ, sanitizer);
        this.role = 'ASSASSIN';
    }
}

export class Marksman extends Champion {
    constructor(champ: IChampion, override sanitizer?: DomSanitizer) {
        super(champ, sanitizer);
        this.role = 'MARKSMAN';
    }
}

export class Fighter extends Champion {
    constructor(champ: IChampion, override sanitizer?: DomSanitizer) {
        super(champ, sanitizer);
        this.role = 'FIGHTER';
    }
}

export class Mage extends Champion {
    constructor(champ: IChampion, override sanitizer?: DomSanitizer) {
        super(champ, sanitizer);
        this.role = 'MAGE';
    }
}
