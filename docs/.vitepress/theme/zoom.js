import EasyZoom from 'easyzoom';

export default {
  mounted() {
    const zoom = new EasyZoom();
    zoom.init('.easyzoom');
  },
};
