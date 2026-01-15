interface BandCampPlayerProps {
  trackId: string
  urlTrackName: string
  trackName: string
}

export default function BandCampPlayer(props: BandCampPlayerProps) {
  const { trackId, urlTrackName, trackName } = props;

  return (
    <iframe
      style={{
        width: "90%",
        height: 42,
      }}
      src={`https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=small/bgcol=ffffff/linkcol=7137dc/artwork=none/transparent=true/`}
      seamless
    >
      <a href={`https://aptist.bandcamp.com/track/${urlTrackName}`}>{trackName} by aptist</a>
    </iframe>
  )
}
