function parseCount(value) {
     let numberParse = Number.parseInt(value);
        if (isNaN(numberParse)) {
            throw new Error("Невалидное значение");
        } else return numberParse;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error){
        return error;
    }
}

class Triangle {
    constructor(a,b,c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        let perimeter = 0;
        return perimeter = this.a + this.b + this.c;
      }

    getArea() {
        let area= 0;
        let halfPerimeter = this.getPerimeter() / 2;
        return area = Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    } 
   }
  
   function getTriangle(a, b, c) {
        
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        let obj = {
            getArea() {
                return 'Ошибка! Треугольник не существует'
            },

            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
             }
        }

          return  obj;
        }                          
    }
   
