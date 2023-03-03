import { Template, TemplateConfig } from './Template';

export interface NowPlayingTemplateConfig extends TemplateConfig {
  albumArtistButton: boolean;
  upNextTitle: string;
  upNextButton: boolean;
}

export class NowPlayingTemplate extends Template<NowPlayingTemplateConfig> {
  constructor(public config: NowPlayingTemplateConfig) {
    super(config);
  }
  public get type(): string {
    return 'nowplaying';
  }
}
