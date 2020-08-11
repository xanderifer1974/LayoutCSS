var app = angular.module("app", ["ngRoute"]);

app.controller('MainCtrl', ['$scope', function ($scope) {
  console.log(1);
  $scope.initMenu = function(){
    console.log(2);
    if (typeof mCustomScrollbar != "undefined") {
      console.log(3);
      calcHeightItens();

      $("#nav-projeto").mCustomScrollbar({
        theme: "dark",
        scrollInertia: 600,
        axis: "y"
      });

      $(window).resize(function(){
        calcHeightItens();
        $("#nav-projeto").mCustomScrollbar("update");
      });
    }
  }
  $scope.initTop = function(){
    calcHeightItens();
    if (typeof mCustomScrollbar != "undefined") {
      $("#top-navbar").mCustomScrollbar({
        theme: "dark",
        scrollInertia: 600,
        axis: "x"
      });
  
      $(window).resize(function(){
        window.calcHeightItens();
        $("#top-navbar").mCustomScrollbar("update");
      });
    }
  }
}]);

app.controller('GlobalCtrl', function ($scope, $route, $location) {
  $("#nav-projeto .nav-itens .active").removeClass("active");
  $("#nav-projeto .nav-item a[href='#!"+$location.path()+"']").parent().addClass("active");

  if (typeof hljs != "undefined") {
		//hljs.initHighlightingOnLoad();
		//hljs.initLineNumbersOnLoad();

		$('pre code').each(function (i, block) {
			hljs.highlightBlock(block);
			if(!$(block).hasClass("nonumber")){
				hljs.lineNumbersBlock(block);
			}
		});
	}
}); 

app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "./view/um-conhecendo-o-css.html",
      controller:"GlobalCtrl"
    })  
    .when("/um-sintaxe", {
          templateUrl: "./view/um-sintaxe.html",
          controller:"GlobalCtrl"
        })
    
    .when("/um-seletores", {
      templateUrl: "./view/um-seletores.html",
      controller:"GlobalCtrl"
    })
    .when("/um-grupos-de-seletores-e-combinadores", {
      templateUrl: "./view/um-grupos-de-seletores-e-combinadores.html",
      controller:"GlobalCtrl"
    })
    .when("/um-cascata", {
      templateUrl: "./view/um-cascata.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-introducao", {
      templateUrl: "./view/dois-introducao.html",
      controller:"GlobalCtrl"
    })
    
    .when("/dois-color", {
      templateUrl: "./view/dois-color.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-font", {
      templateUrl: "./view/dois-font.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-transformacoes-e-decoracoes", {
      templateUrl: "./view/dois-transformacoes-e-decoracoes.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-sombras", {
      templateUrl: "./view/dois-sombras.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-alinhamento", {
      templateUrl: "./view/dois-alinhamento.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-altura-de-linha", {
      templateUrl: "./view/dois-altura-de-linha.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-span", {
      templateUrl: "./view/dois-span.html",
      controller:"GlobalCtrl"
    })
    .when("/tres-introducao", {
      templateUrl: "./view/tres-introducao.html",
      controller:"GlobalCtrl"
    })
    .when("/tres-width-e-height", {
      templateUrl: "./view/tres-width-e-height.html",
      controller:"GlobalCtrl"
    })
    .when("/tres-padding", {
      templateUrl: "./view/tres-padding.html",
      controller:"GlobalCtrl"
    })
    .when("/tres-margin", {
      templateUrl: "./view/tres-margin.html",
      controller:"GlobalCtrl"
    })
    .when("/tres-border", {
      templateUrl: "./view/tres-border.html",
      controller:"GlobalCtrl"
    })

    .when("/quartro-cor", {
      templateUrl: "./view/quartro-cor.html",
      controller:"GlobalCtrl"
    })
    .when("/quatro-imagem", {
      templateUrl: "./view/quatro-imagem.html",
      controller:"GlobalCtrl"
    })
    .when("/quatro-size", {
      templateUrl: "./view/quatro-size.html",
      controller:"GlobalCtrl"
    })
    .when("/quatro-attachment", {
      templateUrl: "./view/quatro-attachment.html",
      controller:"GlobalCtrl"
    })
    .when("/cinco-valores", {
      templateUrl: "./view/cinco-valores.html",
      controller:"GlobalCtrl"
    })
    .when("/cinco-flexbox", {
      templateUrl: "./view/cinco-flexbox.html",
      controller:"GlobalCtrl"
    })
    
    .when('/outro', { template: 'no outro' });
    //.otherwise({ redirectTo: './view/introducao.html' })
});

app.component('barraNavegacao', {
  templateUrl: './templates/navigationBar.html'
})

app.component('menuTopo', {
  templateUrl: './templates/menuTopo.html'
})

//angular.bootstrap(document, [ app.name ])