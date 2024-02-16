import { ParentProps } from "solid-js";

function Background(props: ParentProps) {
  return <div class="flex ",>{props.children}</div>;
}

function Video(props: { src: string; type: string }) {
  return (
    <video
      autoplay
      muted
      loop
      class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source {...props} />
    </video>
  );
}

Background.Video = Video;

export { Background };
