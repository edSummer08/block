export const initialState = {
  components: [],
  selectedComponent: {},

  text_blocks: [],
  shape_blocks: [],
  image_blocks: [],
  button_blocks: [],
  video_blocks: [],
  html_blocks: [],
  form_blocks: [],
  gallery_blocks: [],

};

export const Reducer = (state = initialState, action) => {
  console.log("LOGGER ---", "type:", action.type, "payload:", action.payload);
  let blockType = action.payload.type.toLowerCase().concat("_blocks");

  switch (action.type) {
    // Set Component
    case "SET_COMPONENT":
      return {
        ...state,
        components: [...state.components, action.payload],
      };

    // Selected Component
    case "SELECT_COMPONENT":
      return {
        ...state,
        selectedComponent: action.payload,
      };

    // Change block position
    case "CHANGE_BLOCK_POSITION":
      const blockPosition = state[blockType].map((item) => {
        if (item.id === state.selectedBlock.id) {
          item.props.position = action.payload.props.position;
        }
        return item;
      });
      return {
        ...state,
        [blockType]: blockPosition,
      };

    // Change block size
    case "CHANGE_BLOCK_SIZE":
      const blockSize = state[blockType].map((item) => {
        if (item.id === state.selectedBlock.id) {
          item.props.size = action.payload.props.size;
        }
        return item;
      });
      return {
        ...state,
        [blockType]: blockSize,
      };

    // Change block style
    case "CHANGE_BLOCK_STYLE":
      const blockStyle = state[blockType].map((item) => {
        if (item.id === state.selectedBlock.id) {
          item.props.styles = action.payload.props.styles;
        }
        return item;
      });
      return {
        ...state,
        [blockType]: blockStyle,
      };

    // Delete block
    case "DELETE_BLOCK":
      const blocks = state[blockType].filter(
        (item) => item.id !== state.selectedBlock.id
      );
      return {
        ...state,
        [blockType]: blocks,
      };

    // Change image block
    case "CHANGE_IMAGE_BLOCK":
      const imageBlocks = state.image_blocks.map((item) => {
        if (item.id === state.selectedBlock.id) {
          item.props.image = action.payload.props.image;
        }
        return item;
      });
      return {
        ...state,
        image_blocks: imageBlocks,
      };

    // Change button block
    case "CHANGE_BUTTON_BLOCK":
      const buttonBlocks = state.button_blocks.map((item) => {
        if (item.id === state.selectedBlock.id) {
          item.props.caption = action.payload.props.caption;
        }
        return item;
      });
      return {
        ...state,
        button_blocks: buttonBlocks,
      };

    // Change video block
    case "CHANGE_VIDEO_BLOCK":
      const videoBlocks = state.video_blocks.map((item) => {
        if (item.id === state.selectedBlock.id) {
          item.props.src = action.payload.props.src;
        }
        return item;
      });
      return {
        ...state,
        video_blocks: videoBlocks,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
