import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ChampionsData } from 'src/app/core/constants/constants';
import { ArcaneCharacter, Assasin, Champion, IChampion } from 'src/app/core/models/champion';

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit, OnChanges {
  @Input() isActive: boolean;
  champions: IChampion[] = [];
  selectedChampion: IChampion;

  constructor() {
    this.champions = this.initChampData();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public viewDetail(champ: IChampion): void {
    this.selectedChampion = champ;
  }

  public closeDetail(): void {
    this.selectedChampion = null;
  }

  private initChampData(): IChampion[] {
    return [
      new Assasin({
        img: 'assets/images/akali_card.png',
        name: 'akali',
        bg: 'assets/images/akali-bg.jpg',
        nickName: 'THE ROGUE ASSASSIN',
        role: 'ASSASSIN',
        description: `Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.`,
        video: 'sQ7ALTSCbdw',
        bgLarge: 'assets/images/akali-bg-large.jpg'
      }),

      new Champion({
        img: 'assets/images/ashe_card.png',
        name: 'ashe',
        bg: 'assets/images/ashe-bg.jpg',
        nickName: 'THE FROST ARCHER',
        role: 'MARKSMAN',
        description: `Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.`,
        video: 'mSbMQ5xDnEg',
        bgLarge: 'assets/images/ashe-bg-large.jpg'
      }),

      new Champion({
        img: 'assets/images/garen_card.png',
        name: 'garen',
        bg: 'assets/images/garen-bg.jpg',
        nickName: 'THE MIGHT OF DEMACIA',
        role: 'FIGHTER',
        description: `A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.`,
        video: 'Q7oyW6LjxrA',
        bgLarge: 'assets/images/garen-bg-large.jpg'
      }),

      new Champion({
        img: 'assets/images/ahri_card.png',
        name: 'ahri',
        bg: 'assets/images/ahri-bg.jpg',
        nickName: 'THE NINE-TAILED FOX',
        role: 'MAGE',
        description: 'Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.',
        video: '0z7kfuJwGvs',
        bgLarge: 'assets/images/ahri-bg-large.jpg'
      }),

      new Champion({
        img: 'assets/images/lux_card.png',
        name: 'Lux',
        bg: 'assets/images/lux-bg.jpg',
        nickName: 'THE LADY OF LUMINOSITY',
        role: 'MAGE',
        description: `Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve her family's noble status. Nonetheless, Lux's optimism and resilience have led her to embrace her unique talents, and she now covertly wields them in service of her homeland.`,
        video: 'khEBkz6A0oQ',
        bgLarge: 'assets/images/lux-bg-large.jpg'
      }),

      new Champion({
        img: 'assets/images/fortune_card.png',
        name: 'miss-fortune',
        bg: 'assets/images/fortune-bg.jpg',
        nickName: 'THE BOUNTY HUNTER',
        role: 'MARKSMAN',
        description: 'A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally avenged years later, blowing up his flagship while he was still aboard. Those who underestimate her will face a beguiling and unpredictable opponent… and, likely, a bullet or two in their guts.',
        video: 'TN-EdiIg4G4',
        bgLarge: 'assets/images/fortune-bg-large.jpg'
      }),

    ];
  }
}
