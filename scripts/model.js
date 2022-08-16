
const salaryOperations = {
    basicSalary : 0,
    getHra() {
        return this.basicSalary * 0.20;
    },
    getDa() {
        return this.basicSalary * 0.10;
    },
    getTa() {
        return this.basicSalary * 0.20;
    },
    getPf() {
        return this.basicSalary * 0.30;
    },
    getMa() {
        return this.basicSalary * 0.40;
    },
    getTax() {
        if (this.basicSalary < 500000) {
            return this.basicSalary * 0.05;
        }
        else if (this.basicSalary >= 500000 && this.basicSalary < 700000) {
            return this.basicSalary * 0.10;
        }
        else {
            return this.basicSalary * 0.20;
        }
    },
    getGrossSalary() {
        return parseInt(this.basicSalary) + this.getHra() + this.getDa() + this.getTa() + this.getMa();
    },
    getNetsalary() {
        return this.getGrossSalary() - this.getPf() - this.getTax();
    }
};
