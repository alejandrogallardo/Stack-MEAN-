const express = require('express');
const router = express.Router(); // devuelve un objeto

const employeeCtrl = require('../controllers/employee.controller');

// router.get('/', (req, res) => {
//     //res.send('Holis');
//     res.json({
//         status: 'holis from api'
//     });
// });

router.get('/', employeeCtrl.getEmployees);
router.post('/', employeeCtrl.createEmployee);
router.get('/:id', employeeCtrl.getEmployee);
router.put('/:id', employeeCtrl.editEmployee);
router.delete('/:id', employeeCtrl.deleteEmployee);

module.exports = router;