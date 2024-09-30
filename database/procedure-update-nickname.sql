DELIMITER $$

CREATE PROCEDURE updateNickname(idToruga int, newNickname varchar(100))
BEGIN
    UPDATE toruga
    SET nickname = newNickname
    WHERE toruga.id = idToruga;
END $$

DELIMITER ;

use toruga;
drop procedure updateNickname;
call updateNickname(2, "Country Club - Caixa 2");
select * from toruga;
