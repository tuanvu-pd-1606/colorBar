var gain, offset_x, offset_green;
gain = 10
offset_x= 0.2
offset_green = 0.6
function sigmoid(x, gain, offset_x){
    return ((Math.tanh(((x+offset_x)*gain)/2)+1)/2)
}
    
function colorBarRGB(x){
    var red, blue, green;
    x = (x * 2) - 1;
    red = sigmoid(x, gain, -1*offset_x);
    blue = 1-sigmoid(x, gain, offset_x)
    green = sigmoid(x, gain, offset_green) + (1-sigmoid(x,gain,-1*offset_green));
    green = green - 1.0;
    return [parseInt(red*256), parseInt(green*256),parseInt(blue*256)];
}