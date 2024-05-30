   var progressBar = function(canvas){
    return{
        ctx: document.getElementById(canvas).getContext('2d'),
        display: function(p,color){
            this.ctx.fillStyle = '#444444';
            this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0,0,p*this.ctx.canvas.width/90,this.ctx.canvas.height);
        }
    };
};
progressBar('cppCanvas').display(80,'green');
progressBar('javaCanvas').display(70,'green');
progressBar('webDevCanvas').display(60,'green');
progressBar('mobileDevCanvas').display(100,'green');
progressBar('cSharpCanvas').display(80,'green');
progressBar('mysqlCanvas').display(60,'green');

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}