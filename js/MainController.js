angular.module('App', ['ngResource', 'colorpicker', 'ngMaterial'])
.controller('MainController', ['$scope', '$sce',  function($scope, $sce) { 
    $scope.element = {
      tagName: "button",
      style: {
        width: 0,
        height: 0,
        marginTop: 8,
        marginRight: 12,
        marginBottom: 8,
        marginLeft: 12,
        paddingTop: 8,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12,
        color: "#FFF",
        backgroundColor: "#3a3a3a",
        fontSize: 12,
        borderTop: 1,
        borderRight: 1,
        borderBottom: 1,
        borderLeft: 1,
        borderRadius: 2,
        borderColor: "#492929",
        shadowHorizontal: 0,
        shadowVertical: 6,
        shadowBlur: 3,
        shadowSpread: -4,
        boxShadow: "0px 6px 3px -4px",
        shadowColor: "#111"
      },
      html: "Default"
    };

    $scope.elementString = function(){
      return `
      <${$scope.element.tagName}
        style="
          width: ${$scope.element.style.width || "auto"};
          height: ${$scope.element.style.height || "auto"};
          margin: ${$scope.element.style.marginTop || 0}px 
                  ${$scope.element.style.marginRight || 0}px 
                  ${$scope.element.style.marginBottom || 0}px 
                  ${$scope.element.style.marginLeft || 0}px;
          padding: ${$scope.element.style.paddingTop || 0}px 
                   ${$scope.element.style.paddingRight || 0}px 
                   ${$scope.element.style.paddingBottom || 0}px 
                   ${$scope.element.style.paddingLeft || 0}px;
          color: ${$scope.element.style.color};
          background-color: ${$scope.element.style.backgroundColor};
          font-size: ${$scope.element.style.fontSize}px;
          border-top: ${$scope.element.style.borderTop || 0}px solid ${$scope.element.style.borderColor};
          border-right: ${$scope.element.style.borderRight || 0}px solid ${$scope.element.style.borderColor};
          border-bottom: ${$scope.element.style.borderBottom || 0}px solid ${$scope.element.style.borderColor};
          border-left: ${$scope.element.style.borderLeft || 0}px solid ${$scope.element.style.borderColor};
          border-radius: ${$scope.element.style.borderRadius}px;
          box-shadow: ${$scope.element.style.shadowHorizontal || 0}px
                      ${$scope.element.style.shadowVertical || 0}px 
                      ${$scope.element.style.shadowBlur || 0}px 
                      ${$scope.element.style.shadowSpread || 0}px 
                      ${$scope.element.style.shadowColor};
        ">
        ${$scope.element.html}
      </${$scope.element.tagName}>`;
    };
    
    $scope.elementHtml = function(){
      return $sce.trustAsHtml($scope.elementString());
    };
}]);