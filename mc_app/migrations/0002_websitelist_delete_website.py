# Generated by Django 5.2 on 2025-04-11 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mc_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WebSiteList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.URLField(default='#')),
                ('link', models.URLField(default='#')),
                ('title', models.CharField(blank=True, max_length=20, null=True)),
                ('desc', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='WebSite',
        ),
    ]
