import { ShortLinkEntityBase } from '../ShortLinkEntityBase';
import type { ShortLinkSDK } from '../ShortLinkSDK';
import type { Control } from '../types';
import type { UrlShortening, UrlShorteningLoadMatch } from '../ShortLinkTypes';
declare class UrlShorteningEntity extends ShortLinkEntityBase<UrlShortening> {
    constructor(client: ShortLinkSDK, entopts: any);
    make(this: UrlShorteningEntity): UrlShorteningEntity;
    load(this: any, reqmatch?: UrlShorteningLoadMatch, ctrl?: Control): Promise<UrlShorteningEntity>;
}
export { UrlShorteningEntity };
