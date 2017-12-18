from django.db import models
from yeongram.users import models as user_models # 충돌 방지

# Create your models here.
class TimeStapmedModel(models.Model):
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # 필드가 아닌 모든 것들
    class Meta:
        abstract = True



class Image(TimeStapmedModel):

    """ Image Model """
    
    # 필드는 어떤 종류의 정보를 저장하는 지 알려줌
    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True)


class Comment(TimeStapmedModel):

    """ Comment Model """

    message = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True)
    image = models.ForeignKey(Image, null=True)
    

class Like(TimeStapmedModel):

    """ Like Model """

    creator = models.ForeignKey(user_models.User, null=True)
    image = models.ForeignKey(Image, null=True)