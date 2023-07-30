package com.cg.service.medicalBill;

import com.cg.model.Appointment;
import com.cg.model.MedicalBill;
import com.cg.service.IGeneralService;

import java.util.List;

public interface IMedicalBillService extends IGeneralService<MedicalBill, Long> {
    MedicalBill create(MedicalBill medicalBill, Appointment appointment);

    List<MedicalBill> getAllByCustomer_Id(Long customerId);

    void deleteUnpaidMedBill(MedicalBill medicalBill, Appointment appointment);
}
