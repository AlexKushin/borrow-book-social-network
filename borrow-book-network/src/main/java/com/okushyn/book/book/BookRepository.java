package com.okushyn.book.book;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data. jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<Book, Integer>, JpaSpecificationExecutor<Book> {

    @Query(
            """
                    SELECT book
                    from Book book
                    WHERE book.archived = false
                    AND book.shareable = true
                    AND book.createdBy != :userId
                    """
    )
    Page<Book> findAllDisplayableBooks(Pageable pageable, String userId);

    // what is the difference in approaches
    // Page<Book> findAllByOwnerId(Integer userId, Pageable pageable);
    // and using specification?

}
