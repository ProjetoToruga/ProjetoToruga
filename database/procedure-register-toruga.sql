DELIMITER $$

CREATE PROCEDURE registerToruga(nickname varchar(100))
BEGIN
	declare registeredTorugaId INT;

    INSERT INTO toruga (nickname, createdAt, isDeleted)
    VALUES (nickname, now(), 0);
    
    set registeredTorugaId = last_insert_id();
    
    select registeredTorugaId as id;
END $$

DELIMITER ;

use toruga;
drop procedure registerToruga;
call registerToruga("Jardins de Bordeaux - Caixa 1");
select * from toruga;