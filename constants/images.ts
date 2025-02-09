import unknownArtistImage from '@/assets/unknown_artist.png'
import unknownTrackImage from '@/assets/unknown_track.png'

import { Image } from 'react-native'

export const unknownTrackImageuri=Image.resolveAssetSource(unknownTrackImage).uri
export const unknownTrackArtisturi=Image.resolveAssetSource(unknownArtistImage).uri