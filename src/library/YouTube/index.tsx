interface YouTubeInterface {
  id: string
  width?: string
  height?: string
}

export const YouTube = ({ id }: YouTubeInterface) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <iframe
        style={{ width: "calc(30vh * 1.77)", height: "30vh" }}
        src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
        allow="autoplay"
      ></iframe>
    </div>
  )
}
