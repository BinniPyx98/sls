import { MediaInfoCurlService, Track } from '@services/media-info-curl.service';
import { HttpBadRequestError } from '@errors/http';
import { MediaInfoUrl } from './gallery.inteface';
import { GalleryService } from './gallery.service';

/**
 * It's the feature manager
 * Its methods should implement some feature's functionality
 */
export class GalleryManager {
  private readonly service: GalleryService;

  constructor() {
    /**
     * The feature service should be created in the constructor of the feature manager
     * Other services should be provided in the feature manager's methods
     */
    this.service = new GalleryService();
  }

  /**
   * This method implements some feature's functionality
   * It should validate required data
   * It should display the main steps of the algorithm without implementation
   * All implementation should be placed in the feature service's methods
   * @param mediaInfoUrl - required data
   * @param mediaInfoCurlService - required services
   */
  // getMediaInfo(mediaInfoUrl: MediaInfoUrl, mediaInfoCurlService: MediaInfoCurlService): Promise<Track> {
  //   /**
  //    * Validate required data -> Check if url exists
  //    */
  //   if (!mediaInfoUrl.url) {
  //     throw new HttpBadRequestError("The param 'url' is required.");
  //   }
  //
  //   /**
  //    * Display the main step of the algorithm and call the feature service's method -> Return Media Info
  //    */
  //   return this.service.getMediaInfo(mediaInfoUrl.url, mediaInfoCurlService);
  // }
  checkFilterAndFindInDb(event) {
    return this.service.checkFilterAndFindInDb(event);
  }
  createGalleryObject(event, dbResult) {
    return this.service.createGalleryObject(event, dbResult);
  }
}