insertion sort ve selection sort için kaynak videolar:
https://www.youtube.com/watch?v=NnMSqZgvruM
https://www.youtube.com/watch?v=tOa-RGkTSO0

## soru:
[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

## cevap:
22|27,16,2,18,6

22,27|16,2,18,6

22,16,27|2,18,6

16,22,27|2,18,6

16,22,2,27|18,6

16,2,22,27|18,6

2,16,22,27|18,6

2,16,22,18,27|6

2,16,18,22,27|6

2,16,18,22,27,6|

2,16,18,22,6,27|

2,16,18,6,22,27|

2,16,6,18,22,27|

2,6,16,18,22,27|


## soru:
Big-O gösterimini yazınız. 

## cevap:
n^2

## soru:
Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması
Worst case: Aradığımız sayının sonda olması
Best case: Aradığımız sayının dizinin en başında olması.

## cevap:
avarage case

...............................................................................................................

## soru:
[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.


Tüm adımları yazdım:

en küçük sayı 2, 2 ile 7 yi yer değiştirecek. 
2,3,5,8,7,9,4,15,6

değişiklik yok.
2,3,5,8,7,9,4,15,6

4 ile 5 i yer değiştirecek.
2,3,4,8,7,9,5,15,6

5 ile 8 i yer değiştirecek.
2,3,4,5,7,9,8,15,6

değişiklik yok.
2,3,4,5,7,9,8,15,16

8 ile 9 u yer değiştirecek
2,3,4,5,7,8,9,15,16

değişiklik yok
2,3,4,5,7,8,9,15,16

değişiklik yok
2,3,4,5,7,8,9,15,16

değişiklik yok
2,3,4,5,7,8,9,15,16
