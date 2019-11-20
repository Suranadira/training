package org.javacream.training.application;

import org.springframework.data.repository.CrudRepository;

public interface PeopleRepository extends CrudRepository<Person, Long> {

}
