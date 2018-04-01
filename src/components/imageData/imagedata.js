//从mock获取图片数据，并进行处理
export  var imgData=require('../../mock/goods.json').result;
imgData=(function(imgDataArr){//使用闭包，根据图片信息获取图片路径
	var imgFigureArr=[];
	for(var i in imgDataArr){
		var imgFigure=imgDataArr[i];
		imgFigure.imgUrl=require('../../static/'+imgFigure.productImage);//加载图片路径
		imgFigureArr.push(imgFigure);
	}
	return imgFigureArr;
})(imgData);