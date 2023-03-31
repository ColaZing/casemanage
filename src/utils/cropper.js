//剪裁框
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
export const createCropper = (img,preview) => {
    return new Cropper(img, {
        // crop(event) {
        // console.log(event.detail.x);
        //console.log(event.detail.y);
        //console.log(event.detail.width);
        //console.log(event.detail.height);
        // console.log(event.detail.rotate);
        // console.log(event.detail.scaleX);
        // console.log(event.detail.scaleY);
        viewMode: 1, //定义裁剪器的视图模式。如果将viewMode设置为0，则裁剪框可以延伸到画布外部，而值为1、2或3将限制裁剪框的大小为画布的大小。viewMode为2或3会将画布限制为容器。请注意，如果画布和容器的比例相同，则2和3之间没有差别。
        dragMode: 'move', //定义的拖动模式裁剪器.canvas和容器一样，2和3没有区别。move:移动画布 crop:创建新的裁剪框（默认） none:什么也不做
        aspectRatio: 1 / 1,//定义裁剪框的固定纵横比。默认情况下，裁剪框为自由比率。
        autoCropArea: 0.8 ,//定义0到1之间的fA编号。定义自动裁剪区域大小（百分比）。默认0.8
        cropBoxMovable: true,//允许通过拖动移动裁剪框,。默认true
        cropBoxResizable: true,//以通过拖动来调整裁剪框的大小 默认true
        background: false,//显示容器的网格背景
        movable: false, //移动图像
        rotatable:false,
        scalable:false,//是否可缩放
        zoomable:false,//是否可变焦
        zoomOnWheel:false,//是否可滚轮缩放
        preview

    })
}
    
