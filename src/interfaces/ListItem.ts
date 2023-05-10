import { ImageResolvedAssetSource } from 'react-native';

/**
 * A list item that appears in a list template.
 */
export interface ListItem {
  /**
   * The primary text displayed in the list item cell.
   */
  text: string;
  /**
   * Extra text displayed below the primary text in the list item cell.
   */
  detailText?: string;
  /**
   * The image from file system displayed on the leading edge of the list item cell.
   */
  image?: ImageResolvedAssetSource;
  /**
   * The image displayed on the leading edge of the list item cell.
   */
  imgUrl?: string;
  /**
   * A Boolean value indicating whether the list item cell shows a disclosure indicator on the trailing edge of the list item cell.
   */
  showsDisclosureIndicator?: boolean;
  /**
   * Is Playing flag.
   */
  isPlaying?: boolean;
  /**
   * Progress of track. Float between 0.0 and 1.0
   */
  playbackProgress?: number;
}
