from django.db import models
from . import Owner

class Cat(models.Model):
  name = models.CharField(max_length=30)
  breed = models.CharField(max_length=20)
  grumpy = models.BooleanField(default=False)
  owner = models.ForeignKey(Owner, null=True) #ForeignKey 주인 칼럼에 저장한 ID는 주인 모델과 연결된다.
  # Foreignkey는 주인 모델을 향하고 주인 모델은 새로운 속성을 갖게됨 -> 그 이름은 cat_set
  # ForeignKey는 비워져 있으면 안됨

Cat.objects.create(
  name="Fluffy"
  breed="Persian"
)

fluffy = Cat.objects.get(id=1)

fluffy.name = "Mr. Fluffs"
fluffy.save()

fluffy.delete()

# many to one OR one to many relationship
nicolas = Owner.objects.create(
    name="Nicolas"
    last_name="Serrano"
    age=78
)

bunns = Cat.objects.get(id=2)

bunns.owner = nicolas

bunns.save()

print(bunns.breed) # -> British
print(bunns.owner.age) # -> 78

# 니꼴라스는 주인이고, 아이디는 1번, 그리고 2마리의 고양이를 갖고 있다.
nicolas = Owner.object.get(pk=1)
nico_cats = nicolas.cat_set.all()


# many to many relationship ex) 많은 유저들이 많은 유저를 팔로우 할 수 있다.

