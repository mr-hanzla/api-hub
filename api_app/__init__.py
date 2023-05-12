import os
from flask import Flask


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'api_app.sqlite')
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the config is passed in
        app.config.from_mapping(test_config)

    # endure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/routes')
    def hello():
        return '<h1>Chillax, <br> routes coming soon <br>tey tussi ravo stay tuned</h1>'

    from . import db, auth, blog, tax_info, resume

    db.init_app(app)

    app.register_blueprint(auth.bp)

    app.register_blueprint(blog.bp)
    app.add_url_rule('/', endpoint='blog.index')

    app.register_blueprint(tax_info.bp)

    app.register_blueprint(resume.bp)

    return app
