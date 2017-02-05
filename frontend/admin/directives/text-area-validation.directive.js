export default function textAreaValidation() {
  const isValid = (value) => {
    return value && value.length > 200;
  }
  return {
    require: 'ngModel',
    link: function(scope, elem, attr, ngModelCtrl) {
      ngModelCtrl.$parsers.unshift(function(viewValue) {
        ngModelCtrl.$setValidity('elegant-valid', isValid(viewValue));
        return viewValue;
      });

      ngModelCtrl.$formatters.unshift(function (modelValue) {
          ngModelCtrl.$setValidity('elegant-valid', isValid(modelValue));
          return modelValue;
      });
    }
  }
}
