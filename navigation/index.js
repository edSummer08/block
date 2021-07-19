import { useState, useEffect } from "react";
import { BlocksNavigation } from "./Blocks";
import { TextSettings } from "../components/Settings/TextSettings";
// import { ImageBlockSettings } from "../components/ImageBlock/ImageBlockSettings";
// import { ShapeBlockSettings } from "../components/ShapeBlock/ShapeBlockSettings";
// import { ButtonBlockSettings } from "../components/ButtonBlock/ButtonBlockSettings";
// import { VideoBlockSettings } from "../components/VideoBlock/VideoBlockSettings";

// import { PositionSettings } from "../components/BlockSettings/PositionSettings";
// import { SizeSettings } from "../components/BlockSettings/SizeSettings";
// import { DeleteSettings } from "../components/BlockSettings/DeleteSettings";

import {
  useAppState,
  useAppDispatch,
  changeBlockPosition,
  changeBlockSize,
  deleteBlock,
} from "../context";

export default function Navigation() {
  const { selectedComponent } = useAppState();
  const dispatch = useAppDispatch();
  const [nav, setNav] = useState(true);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(selectedComponent);
  }, [selectedComponent]);

  function blockSettingsView() {
    switch (selected?.name) {
      case "Text":
        return <TextSettings />;
      // case "Image":
      //   return <ImageBlockSettings />;
      // case "Shape":
      //   return <ShapeBlockSettings />;
      // case "Button":
      //   return <ButtonBlockSettings />;
      // case "Video":
      //   return <VideoBlockSettings />;
      default:
        break;
    }
  }

  return (
    <header className="fixed-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Main navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href=" #">
            B
          </a>
          <button
            className="navbar-toggler p-0 border-0"
            onClick={() => setNav((nav) => !nav)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse offcanvas-collapse ${nav && "open"}`}
          >
            <ul className="list-group w-100">
              {selectedComponent.name && (
                <>
                  <li className="list-group-item">
                    {selectedComponent.name} block settings
                  </li>
                  {/* <PositionSettings
                    selectedBlock={selectedComponent}
                    dispatch={dispatch}
                    changeBlockPosition={changeBlockPosition}
                  />
                  <SizeSettings
                    selectedBlock={selectedComponent}
                    dispatch={dispatch}
                    changeBlockSize={changeBlockSize}
                  /> */}
                  {blockSettingsView()}
                  {/* <DeleteSettings
                    selectedBlock={selectedComponent}
                    dispatch={dispatch}
                    deleteBlock={deleteBlock}
                  /> */}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="nav-scroller bg--body shadow-sm">
        <BlocksNavigation />
      </div>
    </header>
  );
}
