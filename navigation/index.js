import { useState, useEffect } from "react";
import { List } from "./List";

import { PositionSettings } from "../components/Settings/Common/PositionSettings";
import { SizeSettings } from "../components/Settings/Common/SizeSettings";
import { DeleteSettings } from "../components/Settings/Common/DeleteSettings";

import { TextSettings } from "../components/Settings/TextSettings";
import { ImageSettings } from "../components/Settings/ImageSettings";
import { ShapeSettings } from "../components/Settings/ShapeSettings";
import { ButtonSettings } from "../components/Settings/ButtonSettings";
import { VideoSettings } from "../components/Settings/VideoSettings";


import {
  useAppState,
  useAppDispatch,
  deleteComponent,
  changeComponentPosition,
  changeComponentSize,
} from "../context";

export default function Navigation() {
  const { selectedComponent } = useAppState();
  const dispatch = useAppDispatch();
  const [nav, setNav] = useState(true);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(selectedComponent);
  }, [selectedComponent]);

  function settingsView() {
    switch (selected?.name) {
      case "Text":
        return <TextSettings />;
      case "Image":
        return <ImageSettings />;
      case "Shape":
        return <ShapeSettings />;
      case "Button":
        return <ButtonSettings />;
      case "Video":
        return <VideoSettings />;
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
                    {selectedComponent.name} settings
                  </li>
                  <PositionSettings
                    selected={selectedComponent}
                    dispatch={dispatch}
                    onChangePosition={changeComponentPosition}
                  />
                  <SizeSettings
                    selected={selectedComponent}
                    dispatch={dispatch}
                    onChangeSize={changeComponentSize}
                  />
                  {settingsView()}
                  <DeleteSettings
                    selected={selectedComponent}
                    dispatch={dispatch}
                    onDelete={deleteComponent}
                  />
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="nav-scroller bg--body shadow-sm">
        <List />
      </div>
    </header>
  );
}
