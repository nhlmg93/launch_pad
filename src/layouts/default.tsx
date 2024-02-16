import lofiGirlVideo from "@Assets/videos/lofi_girl.mp4";
import { BiRegularBorderInner, BiSolidWidget } from "solid-icons/bi";
import { RiSystemSettings5Line } from "solid-icons/ri";
import { ParentProps } from "solid-js";

function NavBar() {
  return (
    <div class="absolute flex justify-center w-screen h-1/6">
      <div class="relative w-96 flex justify-center group">
        <div class="transition ease-in-out transform -translate-y-14 group-hover:translate-y-10">
          <ul class="menu menu-horizontal bg-base-200 rounded-box">
            <li>
              <a class="tooltip" data-tip="Settings">
                <RiSystemSettings5Line class="h-5 w-5" />
              </a>
            </li>
            <li>
              <a class="tooltip" data-tip="Background">
                <BiRegularBorderInner class="h-5 w-5" />
              </a>
            </li>
            <li>
              <a class="tooltip" data-tip="Widgets">
                <BiSolidWidget class="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Layout(props: ParentProps) {
  return (
    <div class="relative flex items-center justify-center h-screen overflow-hidden">
      <div class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <NavBar />
        {props.children}
      </div>
      <video
        autoplay
        muted
        loop
        class="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={lofiGirlVideo} type="video/mp4" />
      </video>
    </div>
  );
}
