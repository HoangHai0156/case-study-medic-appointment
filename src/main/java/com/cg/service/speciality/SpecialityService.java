package com.cg.service.speciality;

import com.cg.model.Speciality;

import java.util.List;
import java.util.Optional;

public class SpecialityService implements ISpecialityService{
    @Override
    public List<Speciality> findAll() {
        return null;
    }

    @Override
    public Optional<Speciality> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Speciality save(Speciality speciality) {
        return null;
    }

    @Override
    public void delete(Speciality speciality) {

    }

    @Override
    public void deleteById(Long id) {

    }
}