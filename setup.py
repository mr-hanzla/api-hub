from setuptools import find_packages, setup

setup(
    name='api_app',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'flask',
    ],
)
