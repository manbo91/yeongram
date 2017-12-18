from django.db import models

class Owner(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField()
    # 주인은 누군가를 팔로잉 할 수 있고, 또 다른 사람을 팔로잉 할 수 있다
    following = models.ManyToManyField('self')
    followers = models.ManyToManyField('self')

nicolas = Owner.objects.get(pk=1)
pedro = Owner.objects.get(pk=2)
jisu = Owner.objects.get(pk=3)

# 여기서 PK는 primary key를 의마함 OR 장고의 ID를 뜻함

nicolas.followers.add(jisu. pedro)
# followers 칼럼 -> 2,3