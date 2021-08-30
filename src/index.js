function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let pattern = /[^0-9*+-\/s]/g
    
    let newExpr = expr.split(' ').join(',').trim()
    let stack = []
    for (let i = 0; i < newExpr.length; i++) {
        if (newExpr[i] === '(') {
            stack.push(newExpr[i])
        }
        else if (newExpr[i] === ')') {
            if (stack.length === 0) {
                 throw new Error( "ExpressionError: Brackets must be paired")
            }
            else {
                stack.pop()
             }  
        }
    }
   
    if (stack.length > 0) {
        throw new Error( "ExpressionError: Brackets must be paired")
    }

    else {
        let operands = {
        '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
        let num = []
        let operand = []
        let result = 0
        let topOp = operand[operand.length - 1]
        let topNum = num[num.length - 1]
        for (i = 0; i < newExpr.length; i++) {
           if (newExpr[i] === ")") {
                if (operand.length === 0) {
                    return false
                }
                else if (newExpr[i] === '(' || newExpr[i] === operands['+']) {
                    operand.push(newExpr[i])
                }
                else if (newExpr[i] === operands['*']) {
                    num.push(newExpr[i])
                    num.push(topOp)
                    operand.pop()
                }
            }
            else if  (typeof(newExpr[i]) === 'number') {
                    num.push(newExpr[i])
                }
            
        }console.log (num)
    }

}
module.exports = {
    expressionCalculator
}