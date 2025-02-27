function Painel(context, nave) {
   this.context = context;
   this.nave = nave;
   this.spritesheet = new Spritesheet(context, nave.imagem, 3, 1);
   this.pontuacao = 0;
}
Painel.prototype = {
   atualizar: function() {
      
   },
   desenhar: function() {
      // Reduz o desenho pela metade
      this.context.scale(0.5, 0.5);
      
      var x = 40;
      var y = 40;
      
      for (var i = 1; i <= this.nave.vidasExtras; i++) {
         this.spritesheet.desenhar(x, y);
         x += 80;
      }
      
      // Torna a dobrar
      this.context.scale(2, 2);
      
      // Para facilitar um pouco...
      var ctx = this.context;
      
      // Pontuação
      ctx.save();
      ctx.fillStyle = 'yellow';
      ctx.font = '20px times neue roman';
      ctx.fillText("Pontos: " + this.pontuacao, 370, 45);
      ctx.restore();   
   }
}
