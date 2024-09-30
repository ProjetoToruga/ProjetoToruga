DELIMITER $$

CREATE PROCEDURE getAllTorugas()
BEGIN
    select id, nickname from toruga where isDeleted = 0;
END $$

DELIMITER ;

use toruga;
drop procedure getAllTorugas;
call getAllTorugas();
select * from toruga;
