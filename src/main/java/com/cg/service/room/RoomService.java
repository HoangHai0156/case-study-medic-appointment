package com.cg.service.room;

import com.cg.model.Room;

import java.util.List;
import java.util.Optional;

public class RoomService implements IRoomService{
    @Override
    public List<Room> findAll() {
        return null;
    }

    @Override
    public Optional<Room> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Room save(Room room) {
        return null;
    }

    @Override
    public void delete(Room room) {

    }

    @Override
    public void deleteById(Long id) {

    }
}
