## Soru:
[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

## Cevap:
Önce bölecek.
16,21,11    8,12,22

16,21 11   8,12 22

16 21  11   8 12 22

16 ie 21'i karşılaştırdı. 8 ile 12'i karşılaştırdı ve sıraladı.
16,21  11  8,12 22

16 ile 11'i karşılaştırdı. 11 daha küçük sıraladı. 8 ile 22'i karşılaştırdı 22 daha büyük. 12 ile 22'i karşılaştırdı 22 daha büyük.
11,16,21   8,12,22

Şimdi bu ikisini kendi arasında karşılaştırması lazım.
11 ve 8'i karşılaştırdı,8 daha küçük.İlk eleman 8 olacak.
8,-,-,-,-,-,-    kalanlar: 11,16,21   12,22

11 ve 12'i karşılaştırdı.11 daha küçük ikinci eleman 11 olacak.
8,11,-,-,-,-    kalanlar: 16,21   12,22

12 ve 16'ı karşılaştırdı.
8,11,12,-,-,-    kalanlar: 16,21   22

16 ve 22'i karşılaştırdı
8,11,12,16,-,-    kalanlar: 21,22

22 ve 21'i karşılaştırdı.
8,11,12,16,21,-    kalanlar: 22

22'den başka eleman kalmadı, 22 son eleman olacak.
8,11,12,16,21,22

## Soru:
Big-O gösterimini yazınız.

## Cevap:
O(n*logn)